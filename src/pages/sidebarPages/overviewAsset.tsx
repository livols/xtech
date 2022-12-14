import Layout from "../../navigation/sideBar";

export function OverviewAsset(loggedIn: boolean) {
  return (
    <div className="navBox" style={{ height: "100%" }}>
      {loggedIn && <Layout />}
      <div style={{ marginLeft: "2%" }}>
        <h2>Asset</h2>
      </div>
    </div>
  );
}
