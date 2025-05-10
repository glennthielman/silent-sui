<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
<img src="https://github.com/glennthielman/silent-sui/blob/master/assets_orginal/favicon/android-chrome-512x512.png?raw=true" alt="Logo" width="80" height="80">
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

A fork off <a href="https://github.com/jeroenpardon/sui">Jeroen Pardon Sui project</a> with the goal of creating a super fast minimalist homepage page with no dependencies to the web, because if there is an outage you don't want a broken homepage.

Features
* Minimalist design 📐
* Focus on offline use 🙅
* Less CSS and JS 🎉
* Less dependencies on library's 🤩
* Vanilla JS 🍦
* Compact files for faster downloads 🏎️
* Small docker image 🐳

<!-- GETTING STARTED -->
## Getting Started

This project can either be run on docker or using a webserver like Nginx.

### Prerequisites:

* Linux, Mac, Windows
* Docker and Docker-compose or self hosted webserver

### Installation

1. Clone the repo
2. Change [data.json](https://github.com/glennthielman/silent-sui/blob/master/data.json) with the elements you want ([icon overview](https://pictogrammers.com/library/mdi/))
3. Do a docker build
   ```sh
   docker build -t sui-silent:latest .
   ```
4. Modify docker-compose.yml
5. Start using docker
   ```sh
   docker-compose up -d
   ```

If you are using your own webserver you only need to copy the following:
 ```sh
   | /assets
   | favicon.ico
   | data.json
   | index.html 
   ```

<!-- ROADMAP -->
## Roadmap

- [x] Remove Handlebar.js in favor of vanilla JS templating
- [x] Remove Roboto.css
- [x] Minified assets
- [ ] Inline JS for less network traffic
- [ ] Github actions
  - [ ] Docker hub image

<!-- LICENSE -->
## License

See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Glenn Thielman - [Twitter](https://x.com/the_glenn90) - [LinkedIn](https://www.linkedin.com/in/glennthielman/)
