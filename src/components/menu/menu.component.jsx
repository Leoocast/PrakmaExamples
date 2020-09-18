import './menu.style.sass'

const Menu = (props = "", component ) => (
    <div class="mdl-layout mdl-js-layout">
        <header class="mdl-layout__header mdl-layout__header--scroll">
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Prakma</span>
            <div class="mdl-layout-spacer"></div>
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