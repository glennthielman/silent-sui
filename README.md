<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<h1 align="center">Silent-Sui</h1>
  <p align="center">
    Minimal noise. Maximum data.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

A fork off <a href="https://github.com/jeroenpardon/sui">Jeroen Pardon Sui project</a> with the goal of creating a homelab page with no dependencies to the web, because if there is an outage you cannot download those css and js files.

Features
* focus on offline use 🙅
* Less CSS and JS 🎉
* Less dependencies on web library's 🤩
* More vanilla JS 🍦
* Compact files for faster downloads 🏎️
* Small docker image 🐳

<!-- GETTING STARTED -->
## Getting Started

This project can either be run on docker or using a webserver like Nginx.

### Installation

1. Clone the repo
2. Change data.json with the elements you want
3. Do a docker build
   ```sh
   docker build -t sui:latest
   ```
4. Modify docker-compose.yml
5. Start using docker
   ```sh
   docker compose up -d
   ```

If you are using your own webserver you only need to copy the index.html, data.json and assets folder.

<!-- ROADMAP -->
## Roadmap

- [ ] Remove roboto.css

<!-- LICENSE -->
## License

See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Glenn Thielman - [@the_glenn90](https://x.com/the_glenn90)