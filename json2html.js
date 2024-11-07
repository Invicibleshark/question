// json2html.js
export default function json2html(data) {
    let html = '<table data-user="keshav.narkudi@gmail.com"><thead><tr>';

    const headers = Array.from(new Set(data.flatMap(Object.keys)));

    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += "</tr></thead><tbody>";

    data.forEach(row => {
      html += "<tr>";
      headers.forEach(header => {
        html += `<td>${row[header] || ''}</td>`; 
      });
      html += "</tr>";
    });

    html += "</tbody></table>";
    return html;
}

