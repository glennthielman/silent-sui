function renderProviders(providers){
    let html = ` <table>
                        <tr>
                            <th>Website</th>
                            <th>Prefix</th>
                        </tr>`;
    for(let i = 0; i < providers.length; i++) {
        html += `<tr>
                    <td><a href="${providers[i].url}">${providers[i].name}</a></td>
                    <td>${providers[i].prefix}</td>
                </tr>`;
    }
    html += '</table>';
    document.getElementById("providers").innerHTML = html;  
}

function renderApps(apps) {
    let html = '';
    for(let i = 0; i < apps.length; i++) {
        html += `<div class="apps_item">
                    <div class="apps_icon">
                        <span class="iconify icon" data-icon="mdi-${apps[i].icon}"></span>
                    </div>
                    <div class="apps_text">
                        <a href="http://${apps[i].url}" target="${apps[i].target}" >${apps[i].name}</a>
                        <span id="app-address">${apps[i].url}</span>
                    </div>
                </div>`;
    }
    document.getElementById("apps_loop").innerHTML = html;   
}

function renderLinks(bookmarks) {
    let html = '';
    for(let i = 0; i < bookmarks.length; i++) {
        var links = bookmarks[i].links;
        html += `<div id="links_item">
                    <h4>${bookmarks[i].category}</h4>`
                    for(let j = 0; j < links.length; j++) {
                        html+= `<a href="${links[j].url}" target="_blank" class="theme_color-border theme_text-select">${links[j].name}</a>`
                    }    
        html+= `</div>`;
    }
    document.getElementById("links_loop").innerHTML = html;   
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            renderApps(data.apps);
            renderLinks(data.bookmarks);
            renderProviders(data.providers);
        });
});