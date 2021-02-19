import React from "react";
import Grid from "@material-ui/core/Grid";
import Noticias from "../../compnents/Card/Noticias";
export default function News() {
    const [visibleNews, setvisibleNews] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);
    
      const toggleVisibility = () => {
        console.log(window.pageYOffset);
    
        if (window.pageYOffset >= 700.5999984741211) {
          setvisibleNews(true);
        } else {
          setvisibleNews(false);
        }
      };
  return (
    <Grid item xs={12}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {visibleNews ? (
          <>
            <Grid item xs={5}>
              <Noticias />
            </Grid>

            <Grid item xs={5}>
              <Noticias />
            </Grid>
          </>
        ) : null}
      </div>
    </Grid>
  );
}
