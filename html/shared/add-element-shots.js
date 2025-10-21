/**
 * @module
 * - Each heading has an ID so that it can be linked to. Heading self-links
 *   are added via JavaScript.
 * - Each section uses the ID of the preceding heading for two things:
 *   - To name the downloadable files
 *   - To restrict the CSS to this particular section:
 *     ```css
 *     #my-heading-id + section
 *     ```
 * - If a section has class .no-shot then no element shots are added to it.
 *
 * Note: If you don’t set a background-color via CSS then the background of
 * the images is going to be transparent.
 */

import * as htmlToImage from 'https://esm.run/html-to-image';

//========== addElementShots() ==========

async function addElementShots() {
  const entries = [];

  const css = [];
  for (const [index, { section, sectionId }] of collectSections().entries()) {
    if (section.classList.contains('no-shot')) {
      continue;
    }

    const downloadDiv = document.createElement('div');
    downloadDiv.className = 'download-div';

    downloadDiv.insertAdjacentHTML(
      'beforeend',
      `<span style="grid-area: download-text">Download:</span>`
    );

    const figuresDiv = document.createElement('div');
    for (const func of [createSvgShot, createPngShot]) {
      const { fileType, downloadHref, img } = await func(section);
      const filename = sectionId + '.' + fileType;
      const checkboxId = `${fileType}-checkbox${index}`;
      const figureId = `${fileType}-figure${index}`;

      downloadDiv.insertAdjacentElement(
        'beforeend',
        createDownloadLink(checkboxId, downloadHref, filename, fileType)
      );
      figuresDiv.append(
        createFigure(figureId, img)
      );
      css.push(
        `body:has(#${checkboxId}:checked) #${figureId} {`,
        `  display: block;`,
        `}`,
      );
    }
    entries.push({
      section,
      elems: [
        // In reverse order!
        figuresDiv,
        downloadDiv,
      ],
    });

    await yieldToMain();
  }

  const style = document.createElement('style');
  style.insertAdjacentText('afterbegin', css.join('\n'));
  document.body.append(style);

  for (const {section, elems} of entries) {
    for (const elem of elems) {
      section.insertAdjacentElement('afterend', elem);
    }
    section.classList.add('has-element-shots');
  }
}

function collectSections() {
  const result = [];
  let headingId = '';
  for (const elem of document.querySelectorAll('section, h1, h2, h3, h4, h5, h6')) {
    if (/^H[123456]$/v.test(elem.tagName)) {
      headingId = elem.id; // empty string if missing
    } else if (elem.tagName === 'SECTION') {
      const section = elem;
      if (headingId.length === 0) {
        throw new Error('There is no heading with an ID before this section:\n' + section.outerHTML);
      }
      result.push({
        section,
        sectionId: headingId,
      });
      // Clear after use so that it isn’t used twice
      headingId = '';
    }
  }
  return result;
}

function createFigure(figureId, img) {
  const figure = document.createElement('figure');
  figure.className = 'element-shot';
  figure.id = figureId;
  figure.append(img);
  return figure;
}

function createDownloadLink(checkboxId, href, filename, fileType) {
  const label = document.createElement('label');
  label.style = `grid-area: download-link-${fileType}`;
  {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = checkboxId;
    checkbox.title = `Click to show image below`;
    label.append(checkbox);
    label.insertAdjacentText('beforeend', ' ');
  }
  {
    const link = document.createElement('a');
    link.title = `Click to download image`;
    link.href = href;
    link.download = filename;
    link.insertAdjacentHTML('afterbegin', `<code>${filename}</code>`);
    label.append(link);
  }
  return label;
}

//========== SVG ==========

async function createSvgShot(section) {
  const imgSrcDataUrl = await htmlToImage.toSvg(section);
  const img = document.createElement('img');
  img.src = imgSrcDataUrl;
  const blob = dataUrlToBlob(imgSrcDataUrl);
  const downloadHref = URL.createObjectURL(blob);
  return {
    fileType: 'svg',
    downloadHref,
    img,
  };
}

//========== PNG ==========

async function createPngShot(section) {
  const canvas = await htmlToImage.toCanvas(section);
  const blob = await canvasToBlob(canvas);
  const downloadHref = URL.createObjectURL(blob);
  return {
    fileType: 'png',
    downloadHref,
    img: canvas,
  };
}

//========== Generic utilities ==========

// data:image/svg+xml;charset=utf-8,
const reDataUrlPrefix = /^data:(?<mediaType>[^;]+);(?<encoding>base64|charset=utf-8),/v;

function dataUrlToBlob(dataUrl) {
  const prefixMatch = reDataUrlPrefix.exec(dataUrl);
  if (!prefixMatch) {
    throw new Error('Illegal data URL format: ' + JSON.stringify(dataUrl));
  }
  const prefixLen = prefixMatch[0].length;
  const { mediaType, encoding } = prefixMatch.groups;
  let byteArray;
  const dataStr = decodeURIComponent(dataUrl.slice(prefixLen));
  if (encoding === 'base64') {
    byteArray = Uint8Array.fromBase64(dataStr);
  } else if (encoding === 'charset=utf-8') {
    byteArray = new TextEncoder().encode(dataStr);
  } else {
    throw new Error();
  }
  return new Blob([byteArray], { type: mediaType });
}

function canvasToBlob(canvas, type = 'image/png') {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob === null) {
          reject('Could not create blob');
        } else {
          resolve(blob);
        }
      },
      type
    );
  });
}

function yieldToMain() {
  if (globalThis.scheduler?.yield) {
    return scheduler.yield();
  }

  // Fallback implementation
  return new Promise(
    (resolve) => {
      setTimeout(resolve, 0);
    }
  );
}

//========== Call addElementShots() ==========

await addElementShots();