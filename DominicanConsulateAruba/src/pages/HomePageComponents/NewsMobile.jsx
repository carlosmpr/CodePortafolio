import React from "react";
import Grid from "@material-ui/core/Grid";
import Noticias from "../../compnents/Card/Noticias";
export default function NewsMobile() {
    const [visibleNews, setvisibleNews] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
      }, []);
    
      const toggleVisibility = () => {
        console.log(window.pageYOffset);
    
        if (window.pageYOffset >= 400.5999984741211) {
          setvisibleNews(true);
        } else {
          setvisibleNews(false);
        }
      };
  return (
    <Grid item xs={12} >
      <div style={{ display: "flex",flexDirection:'column', justifyContent: "space-evenly" }}>
        {visibleNews ? (
          <>
            <Grid item xs={12} style={{marginBottom:35}}>
              <Noticias />
            </Grid>

            <Grid item xs={12} style={{marginBottom:35}}>
              <Noticias />
            </Grid>
          </>
        ) : null}
      </div>
    </Grid>
  );
}
