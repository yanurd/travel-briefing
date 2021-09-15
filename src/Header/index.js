
//Styles
import './Header.css'

const Header = () => {

  return (
    <header>
      <section className="header">
        <h1 className="header-title">
          Travel<span className="header-title_secondary">briefing</span>
        </h1>
        <div className="header-contact">
          <a className="header-contact_me" href="https://twitter.com/yanurd_">Contact me</a>
        </div>
      </section>
    </header>
  );
};

export { Header };
