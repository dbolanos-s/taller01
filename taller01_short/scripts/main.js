"use strict";

document.addEventListener("DOMContentLoaded", function () {
    cargarCanciones();
});

const cargarCanciones = async () => {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Youtube/only_songs.json"
        );

        const data = await response.json();

        const canciones = data.slice(0, 12);

        let formatter = new Intl.NumberFormat('en-US');

        const songsGrid = document.querySelector(".songs-grid");

        canciones.forEach((song) => {

            let card_song = `<article class="song-card">
    <div class="cover">
        <img src="${song.thumbnail}"
            alt="Portada: ${song.title}">
        <span class="badge">${song.duration_string}</span>
    </div>
    <div class="content">
        <h2 class="title">${song.title}</h2>
        <div class="meta">${formatter.format(song.view_count)} vistas</div>
        <div class="footer">
            <span class="channel">Canal: <a href="${song.channel_url}"
                    target="_blank" rel="noopener noreferrer">${song.channel}</a></span>
        </div>
    </div>
</article>`;

            songsGrid.innerHTML += card_song;
        });

    } catch (error) {
        alert("Error al cargar los datos: " + error.message);
    }
};