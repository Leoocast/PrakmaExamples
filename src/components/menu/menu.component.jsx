import './menu.style.sass'

const Menu = (props = "", component ) => (
    <div class="mdl-layout mdl-js-layout">
        <header class="mdl-layout__header mdl-layout__header--scroll">
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Prakma</span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation">
                <a class="github-button" href="https://github.com/leoocast" data-size="large" aria-label="Follow @leoocast on GitHub">Follow @leoocast</a>
                <a class="github-button ml-5" href="https://github.com/leoocast/prakma" data-icon="octicon-star" data-size="large" aria-label="Star leoocast/prakma on GitHub">Star</a>
                <a class="github-button ml-5" href="https://github.com/leoocast/prakmaexamples/generate" data-icon="octicon-repo-template" data-size="large" aria-label="Use this template leoocast/prakmaexamples on GitHub">Use this template</a>
                <a class="github-button ml-5" href="https://github.com/leoocast/prakmaexamples/archive/master.zip" data-icon="octicon-download" data-size="large" aria-label="Download leoocast/prakmaexamples on GitHub">Download</a>
            </nav>
        </div>
        </header>
        <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Examples</span>
            <nav class="mdl-navigation">
                <a class="mdl-navigation__link" href="home.html">Home</a>
                <a class="mdl-navigation__link" href="login.html">Login</a>
            </nav>
        </div>
        {component}
  </div>
)

export const Container = (props = "", component) => (
    <Menu>
        <main class="mdl-layout__content">
            <div class="page-content">
                {component}
            </div>
        </main>
    </Menu>
)