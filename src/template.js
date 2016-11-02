export default ({ body, title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link rel="stylesheet" href="/assets/index.css" />
        <link rel="stylesheet" href="/assets/App.css" />
      </head>

      <body>
        <div id="root">${body}</div>
      </body>

      <script src="/assets/index.js"></script>
    </html>
  `;
};
