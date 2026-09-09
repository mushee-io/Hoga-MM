import { markets } from "@/data/demo";
export default function Markets() {
  return (
    <>
      <p className="eyebrow">MARKET SNAPSHOT</p>
      <h1>The watchlist.</h1>
      <p className="muted page-description">Three markets. One compact view.</p>
      <div className="section-heading">
        <h2>Markets</h2>
        <span className="micro">DEMO VALUES ONLY</span>
      </div>
      {markets.map((market) => (
        <article className="market-row" key={market.symbol}>
          <div>
            <h2>{market.symbol}</h2>
            <p className="muted">{market.name}</p>
          </div>
          <div className="text-right">
            <strong>{market.price}</strong>
            <p
              className={
                market.change.startsWith("-") ? "negative" : "positive"
              }
            >
              {market.change}
            </p>
          </div>
        </article>
      ))}
      <p className="footnote">
        Illustrative prices and changes.
        <br />
        This snapshot does not update with the market.
      </p>
    </>
  );
}
