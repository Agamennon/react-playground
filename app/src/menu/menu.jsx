
var Link = Router.Link;
var menu = React.createClass({
    render: () => {
        return (
            <div>
                <nav role='navigation' className="main-nav" id="main-nav">
                    <ul id="main-nav-list">
                        <li>
                            <Link to="notes">
                                <div>
                                    <txt>Notes</txt>
                                    <span>Lista de anoteções</span>
                                </div>
                            </Link>

                        </li>
                        <li>
                            <Link to="reflux">
                                <div>
                                    <txt>Reflux</txt>
                                    <span>Exemplos</span>
                                </div>
                            </Link>

                        </li>

                        <li>
                            <Link to="components">
                                <div>
                                    <txt>Gui React Components</txt>
                                    <span>gui components</span>
                                </div>
                            </Link>

                        </li>

                        <li>
                            <Link to="tutorial">
                                <div>
                                    <txt>React Tutorial</txt>
                                    <span>Tutorial oficial do react</span>
                                </div>
                            </Link>

                        </li>
                        <li>
                            <Link to="guicombotest">
                                <div>
                                    <txt>Gui Combobox</txt>
                                    <span>Tentativa de criar um combobox</span>
                                </div>
                            </Link>

                        </li>
                        <li>
                            <Link to="thinking">
                                <div>
                                    <txt>Thinking in React</txt>
                                    <span>Implementação oficial do site</span>
                                </div>
                            </Link>

                        </li>


                        <li>
                            <Link to="material">
                                <div>
                                    <txt>React Material</txt>
                                    <span>React Material Design</span>
                                </div>
                            </Link>

                        </li>



                        <li>
                            <Link to="inbox">
                                <div>
                                    <txt>Inbox</txt>
                                    <span>Para testes</span>
                                </div>
                            </Link>

                        </li>

                        <li>
                            <Link to="calendar">
                                <div>
                                    <txt>Calendar</txt>
                                    <span>Para testes</span>
                                </div>
                            </Link>

                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
});

module.exports = menu;

