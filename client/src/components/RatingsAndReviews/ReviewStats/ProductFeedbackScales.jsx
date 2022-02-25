import React from "react";
import { CaretDown } from "phosphor-react";

const ProductFeedbackScales = (props) => {
  let size, width, comfort, quality, length, fit;

  props.ratings.characteristics.Size
    ? (size = props.ratings.characteristics.Size.value)
    : null;
  props.ratings.characteristics.Width
    ? (width = props.ratings.characteristics.Width.value)
    : null;
  props.ratings.characteristics.Comfort
    ? (comfort = props.ratings.characteristics.Comfort.value)
    : null;
  props.ratings.characteristics.Quality
    ? (quality = props.ratings.characteristics.Quality.value)
    : null;
  props.ratings.characteristics.Length
    ? (length = props.ratings.characteristics.Length.value)
    : null;
  props.ratings.characteristics.Fit
    ? (fit = props.ratings.characteristics.Fit.value)
    : null;

  const containerStyles = {
    height: 5,
    width: "180px",
    backgroundColor: "#e0e0de",
    position: "absolute",
    marginTop: "-7.5px",
    marginLeft: "10px",
    marginRight: "10px",
  };
  return (
    <div>
      <div style={{ fontSize: "2rem" }}>Characteristics</div>
      <br />

      {/* size */}
      {size ? (
        <div>
          <div>
            <h4 style={{ marginBottom: "5px" }}>Size</h4>
            <br />
            <div
              style={{
                height: "100%",
                marginLeft: `${(size / 5) * 180}px`,
                marginTop: "-15px",
              }}
            >
              <div>
                <CaretDown size={20} />
              </div>
            </div>
          </div>

          <div style={containerStyles}>
            <div style={{ marginLeft: "-1px", marginTop: "-3px" }}>|</div>
            <div style={{ marginLeft: "89px", marginTop: "-11.5px" }}>|</div>
            <div style={{ marginLeft: "179px", marginTop: "-12px" }}>|</div>

            <div style={{ marginLeft: "0px", marginTop: "5px" }}>Too Small</div>
            <div style={{ marginLeft: "73px", marginTop: "-11.5px" }}>
              Perfect
            </div>
            <div style={{ marginLeft: "135px", marginTop: "-12px" }}>
              Too Large
            </div>
          </div>
          <br />
          <br />
        </div>
      ) : null}

      {/* width */}
      {width ? (
        <div>
          <div>
            <h4 style={{ marginBottom: "5px" }}>Width</h4>
            <br />
            <div
              style={{
                height: "100%",
                marginLeft: `${(width / 5) * 180}px`,
                marginTop: "-15px",
              }}
            >
              <div>
                <CaretDown size={20} />
              </div>
            </div>
          </div>

          <div style={containerStyles}>
            <div style={{ marginLeft: "-1px", marginTop: "-3px" }}>|</div>
            <div style={{ marginLeft: "89px", marginTop: "-11.5px" }}>|</div>
            <div style={{ marginLeft: "179px", marginTop: "-12px" }}>|</div>

            <div style={{ marginLeft: "0px", marginTop: "5px" }}>Too Small</div>
            <div style={{ marginLeft: "73px", marginTop: "-11.5px" }}>
              Perfect
            </div>
            <div style={{ marginLeft: "135px", marginTop: "-12px" }}>
              Too Large
            </div>
          </div>
          <br />
          <br />
        </div>
      ) : null}

      {/* Comfort */}
      {comfort ? (
        <div>
          <div>
            <h4 style={{ marginBottom: "5px" }}>Comfort</h4>
            <br />
            <div
              style={{
                height: "100%",
                marginLeft: `${(comfort / 5) * 180}px`,
                marginTop: "-15px",
              }}
            >
              <div>
                <CaretDown size={20} />
              </div>
            </div>
          </div>

          <div style={containerStyles}>
            <div style={{ marginLeft: "-1px", marginTop: "-3px" }}>|</div>
            <div style={{ marginLeft: "89px", marginTop: "-11.5px" }}>|</div>
            <div style={{ marginLeft: "179px", marginTop: "-12px" }}>|</div>

            <div style={{ marginLeft: "0px", marginTop: "5px" }}>Too Small</div>
            <div style={{ marginLeft: "73px", marginTop: "-11.5px" }}>
              Perfect
            </div>
            <div style={{ marginLeft: "135px", marginTop: "-12px" }}>
              Too Large
            </div>
          </div>
          <br />
          <br />
        </div>
      ) : null}

      {/* Quality */}
      {quality ? (
        <div>
          <div>
            <h4 style={{ marginBottom: "5px" }}>Quality</h4>
            <br />
            <div
              style={{
                height: "100%",
                marginLeft: `${(quality / 5) * 180}px`,
                marginTop: "-15px",
              }}
            >
              <div>
                <CaretDown size={20} />
              </div>
            </div>
          </div>

          <div style={containerStyles}>
            <div style={{ marginLeft: "-1px", marginTop: "-3px" }}>|</div>
            <div style={{ marginLeft: "89px", marginTop: "-11.5px" }}>|</div>
            <div style={{ marginLeft: "179px", marginTop: "-12px" }}>|</div>

            <div style={{ marginLeft: "0px", marginTop: "5px" }}>Too Small</div>
            <div style={{ marginLeft: "73px", marginTop: "-11.5px" }}>
              Perfect
            </div>
            <div style={{ marginLeft: "135px", marginTop: "-12px" }}>
              Too Large
            </div>
          </div>
          <br />
          <br />
        </div>
      ) : null}

      {/* Length */}
      {length ? (
        <div>
          <div>
            <h4 style={{ marginBottom: "5px" }}>Length</h4>
            <br />
            <div
              style={{
                height: "100%",
                marginLeft: `${(length / 5) * 180}px`,
                marginTop: "-15px",
              }}
            >
              <div>
                <CaretDown size={20} />
              </div>
            </div>
          </div>

          <div style={containerStyles}>
            <div style={{ marginLeft: "-1px", marginTop: "-3px" }}>|</div>
            <div style={{ marginLeft: "89px", marginTop: "-11.5px" }}>|</div>
            <div style={{ marginLeft: "179px", marginTop: "-12px" }}>|</div>

            <div style={{ marginLeft: "0px", marginTop: "5px" }}>Too Small</div>
            <div style={{ marginLeft: "73px", marginTop: "-11.5px" }}>
              Perfect
            </div>
            <div style={{ marginLeft: "135px", marginTop: "-12px" }}>
              Too Large
            </div>
          </div>
          <br />
          <br />
        </div>
      ) : null}

      {/* Fit */}
      {fit ? (
        <div>
          <div>
            <h4 style={{ marginBottom: "5px" }}>Fit</h4>
            <br />
            <div
              style={{
                height: "100%",
                marginLeft: `${(fit / 5) * 180}px`,
                marginTop: "-15px",
              }}
            >
              <div>
                <CaretDown size={20} />
              </div>
            </div>
          </div>

          <div style={containerStyles}>
            <div style={{ marginLeft: "-1px", marginTop: "-3px" }}>|</div>
            <div style={{ marginLeft: "89px", marginTop: "-11.5px" }}>|</div>
            <div style={{ marginLeft: "179px", marginTop: "-12px" }}>|</div>

            <div style={{ marginLeft: "0px", marginTop: "5px" }}>Too Small</div>
            <div style={{ marginLeft: "73px", marginTop: "-11.5px" }}>
              Perfect
            </div>
            <div style={{ marginLeft: "135px", marginTop: "-12px" }}>
              Too Large
            </div>
          </div>
          <br />
          <br />
        </div>
      ) : null}

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ProductFeedbackScales;
