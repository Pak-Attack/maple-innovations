import React from "react";

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChangeSizeValue = this.onChangeSizeValue.bind(this);
    this.onChangeWidthValue = this.onChangeWidthValue.bind(this);
    this.onChangeComfortValue = this.onChangeComfortValue.bind(this);
    this.onChangeQualityValue = this.onChangeQualityValue.bind(this);
    this.onChangeLengthValue = this.onChangeLengthValue.bind(this);
    this.onChangeFitValue = this.onChangeFitValue.bind(this);
  }

  onChangeSizeValue() {
    let size = null;
    event.target.value === "A size too small" ? (size = 1) : null;
    event.target.value === "½ a size too small" ? (size = 2) : null;
    event.target.value === "Perfect" ? (size = 3) : null;
    event.target.value === "½ a size too big" ? (size = 4) : null;
    event.target.value === "A size too wide" ? (size = 5) : null;
    this.props.onChangeSize(size);
  }

  onChangeWidthValue() {
    let width = null;
    event.target.value === "Too narrow" ? (width = 1) : null;
    event.target.value === "Slightly narrow" ? (width = 2) : null;
    event.target.value === "Perfect" ? (width = 3) : null;
    event.target.value === "Slightly wide" ? (width = 4) : null;
    event.target.value === "Too wide" ? (width = 5) : null;
    this.props.onChangeWidth(width);
  }

  onChangeComfortValue() {
    let comfort = null;
    event.target.value === "Uncomfortable" ? (comfort = 1) : null;
    event.target.value === "Slightly uncomfortable" ? (comfort = 2) : null;
    event.target.value === "Ok" ? (comfort = 3) : null;
    event.target.value === "Comfortable" ? (comfort = 4) : null;
    event.target.value === "Perfect" ? (comfort = 5) : null;
    this.props.onChangeComfort(comfort);
  }

  onChangeQualityValue() {
    let quality = null;
    event.target.value === "Poor" ? (quality = 1) : null;
    event.target.value === "Below average" ? (quality = 2) : null;
    event.target.value === "What I expected" ? (quality = 3) : null;
    event.target.value === "Pretty great" ? (quality = 4) : null;
    event.target.value === "Perfect" ? (quality = 5) : null;
    this.props.onChangeQuality(quality);
  }

  onChangeLengthValue() {
    let length = null;
    event.target.value === "Runs short" ? (length = 1) : null;
    event.target.value === "Runs slightly short" ? (length = 2) : null;
    event.target.value === "Perfect" ? (length = 3) : null;
    event.target.value === "Runs slightly long" ? (length = 4) : null;
    event.target.value === "Runs long" ? (length = 5) : null;
    this.props.onChangeLength(length);
  }

  onChangeFitValue() {
    let fit = null;
    event.target.value === "Runs tight" ? (fit = 1) : null;
    event.target.value === "Runs slightly tight" ? (fit = 2) : null;
    event.target.value === "Perfect" ? (fit = 3) : null;
    event.target.value === "Runs slightly long" ? (fit = 4) : null;
    event.target.value === "Runs long" ? (fit = 5) : null;
    this.props.onChangeFit(fit);
  }

  render() {
    return (
      <div className="characteristics">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Size
          </div>
          <label className="size-characteristics">
            <div>
              <input
                type="radio"
                value="A size too small"
                onChange={this.onChangeSizeValue}
                name="size"
                style={{ marginLeft: "50px" }}
              />
              <br />A size too small
            </div>
            <div>
              <input
                type="radio"
                value="½ a size too small"
                onChange={this.onChangeSizeValue}
                name="size"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />½ a size too small
            </div>

            <div>
              <input
                type="radio"
                value="Perfect"
                onChange={this.onChangeSizeValue}
                name="size"
                style={{ marginLeft: "50px" }}
              />
              <br />
              Perfect
            </div>
            <div>
              <input
                type="radio"
                value="½ a size too big"
                onChange={this.onChangeSizeValue}
                name="size"
                style={{ marginLeft: "50px" }}
              />
              <br />½ a size too big
            </div>
            <div>
              <input
                type="radio"
                value="A size too wide"
                onChange={this.onChangeSizeValue}
                name="size"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />A size too big
            </div>
          </label>
        </div>
        <br />
        <br />

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Width
          </div>
          <label className="width-characteristics">
            <div>
              <input
                type="radio"
                value="Too narrow"
                onChange={this.onChangeWidthValue}
                name="width"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br /> Too narrow
            </div>
            <div>
              <input
                type="radio"
                value="Slightly narrow"
                onChange={this.onChangeWidthValue}
                name="width"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br /> Slightly narrow
            </div>
            <div>
              <input
                type="radio"
                value="Perfect"
                onChange={this.onChangeWidthValue}
                name="width"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Perfect
            </div>

            <div>
              <input
                type="radio"
                value="Slightly wide"
                onChange={this.onChangeWidthValue}
                name="width"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Slightly wide
            </div>

            <div>
              <input
                type="radio"
                value="Too wide"
                onChange={this.onChangeWidthValue}
                name="width"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Too wide
            </div>
          </label>
        </div>
        <br />
        <br />

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Comfort
          </div>
          <label className="comfort-characteristics">
            <div>
              <input
                type="radio"
                value="Uncomfortable"
                onChange={this.onChangeComfortValue}
                name="comfort"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Uncomfortable
            </div>

            <div>
              <input
                type="radio"
                value="Slightly uncomfortable"
                onChange={this.onChangeComfortValue}
                name="comfort"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Slightly uncomfortable
            </div>
            <div>
              <input
                type="radio"
                value="Ok"
                onChange={this.onChangeComfortValue}
                name="comfort"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Ok
            </div>
            <div>
              <input
                type="radio"
                value="Comfortable"
                onChange={this.onChangeComfortValue}
                name="comfort"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Comfortable
            </div>
            <div>
              <input
                type="radio"
                value="Perfect"
                onChange={this.onChangeComfortValue}
                name="comfort"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Perfect
            </div>
          </label>
        </div>
        <br />
        <br />

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Quality
          </div>
          <label className="quality-characteristics">
            <div>
              <input
                type="radio"
                value="Poor"
                onChange={this.onChangeQualityValue}
                name="quality"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Poor
            </div>
            <div>
              <input
                type="radio"
                value="Below average"
                onChange={this.onChangeQualityValue}
                name="quality"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Below average
            </div>
            <div>
              <input
                type="radio"
                value="What I expected"
                onChange={this.onChangeQualityValue}
                name="quality"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              What I expected
            </div>
            <div>
              <input
                type="radio"
                value="Pretty great"
                onChange={this.onChangeQualityValue}
                name="Pretty great"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Comfortable
            </div>
            <div>
              <input
                type="radio"
                value="Perfect"
                onChange={this.onChangeQualityValue}
                name="quality"
                style={{ marginLeft: "15px" }}
              />{" "}
              <br />
              Perfect
            </div>
          </label>
        </div>
        <br />
        <br />

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Length
          </div>
          <label className="length-characteristics">
            <div>
              <input
                type="radio"
                value="Runs short"
                onChange={this.onChangeLengthValue}
                name="length"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Runs short
            </div>
            <div>
              <input
                type="radio"
                value="Runs slightly short"
                onChange={this.onChangeLengthValue}
                name="length"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Runs slightly short
            </div>
            <div>
              <input
                type="radio"
                value="Perfect"
                onChange={this.onChangeLengthValue}
                name="length"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Perfect
            </div>
            <div>
              <input
                type="radio"
                value="Runs slightly long"
                onChange={this.onChangeLengthValue}
                name="length"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Runs slightly long
            </div>
            <div>
              <input
                type="radio"
                value="Runs long"
                onChange={this.onChangeLengthValue}
                name="length"
                style={{ marginLeft: "25px" }}
              />{" "}
              <br />
              Runs long
            </div>
          </label>
        </div>
        <br />
        <br />

        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Fit
          </div>
          <label className="fit-characteristics">
            <div>
              <input
                type="radio"
                value="Runs tight"
                onChange={this.onChangeFitValue}
                name="fit"
                style={{ marginLeft: "25px" }}
              />{" "}
              <br />
              Runs tight
            </div>
            <div>
              <input
                type="radio"
                value="Runs slightly tight"
                onChange={this.onChangeFitValue}
                name="fit"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Runs slightly tight
            </div>
            <div>
              <input
                type="radio"
                value="Perfect"
                onChange={this.onChangeFitValue}
                name="fit"
                style={{ marginLeft: "14px" }}
              />{" "}
              <br />
              Perfect
            </div>
            <div>
              <input
                type="radio"
                value="Runs slightly long"
                onChange={this.onChangeFitValue}
                name="fit"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />
              Runs slightly long
            </div>
            <div>
              <input
                type="radio"
                value="Runs long"
                onChange={this.onChangeFitValue}
                name="fit"
                style={{ marginLeft: "25px" }}
              />{" "}
              <br />
              Runs long
            </div>
          </label>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Characteristics;
