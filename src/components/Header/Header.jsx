import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <span className="header-globe">🌍</span>
          <div>
            <h1 className="header-title">WorldAtlas</h1>
            <p className="header-subtitle">
              Explore every country nation on Earth
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
