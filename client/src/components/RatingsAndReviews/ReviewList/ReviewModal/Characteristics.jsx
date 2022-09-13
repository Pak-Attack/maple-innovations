import React from "react";

const Characteristics = (props) => {

  function onChangeSizeValue() {
    let size = null;
    let value = event.target.value;
    value === "A size too small" ? (size = 1) : null;
    value === "½ a size too small" ? (size = 2) : null;
    value === "Perfect" ? (size = 3) : null;
    value === "½ a size too big" ? (size = 4) : null;
    value === "A size too wide" ? (size = 5) : null;
    props.onChangeSize(size);
  }

  function onChangeWidthValue() {
    let width = null;
    let value = event.target.value;
    value === "Too narrow" ? (width = 1) : null;
    value === "Slightly narrow" ? (width = 2) : null;
    value === "Perfect" ? (width = 3) : null;
    value === "Slightly wide" ? (width = 4) : null;
    value === "Too wide" ? (width = 5) : null;
    props.onChangeWidth(width);
  }

  function onChangeComfortValue() {
    let comfort = null;
    let value = event.target.value;
    value === "Uncomfortable" ? (comfort = 1) : null;
    value === "Slightly uncomfortable" ? (comfort = 2) : null;
    value === "Ok" ? (comfort = 3) : null;
    value === "Comfortable" ? (comfort = 4) : null;
    value === "Perfect" ? (comfort = 5) : null;
    props.onChangeComfort(comfort);
  }

  function onChangeQualityValue() {
    let quality = null;
    let value = event.target.value;
    value === "Poor" ? (quality = 1) : null;
    value === "Below average" ? (quality = 2) : null;
    value === "What I expected" ? (quality = 3) : null;
    value === "Pretty great" ? (quality = 4) : null;
    value === "Perfect" ? (quality = 5) : null;
    props.onChangeQuality(quality);
  }

  function onChangeLengthValue() {
    let length = null;
    let value = event.target.value;
    value === "Runs short" ? (length = 1) : null;
    value === "Runs slightly short" ? (length = 2) : null;
    value === "Perfect" ? (length = 3) : null;
    value === "Runs slightly long" ? (length = 4) : null;
    value === "Runs long" ? (length = 5) : null;
    props.onChangeLength(length);
  }

  function onChangeFitValue() {
    let fit = null;
    let value = event.target.value;
    value === "Runs tight" ? (fit = 1) : null;
    value === "Runs slightly tight" ? (fit = 2) : null;
    value === "Perfect" ? (fit = 3) : null;
    value === "Runs slightly long" ? (fit = 4) : null;
    value === "Runs long" ? (fit = 5) : null;
    props.onChangeFit(fit);
  }

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
                onChange={onChangeSizeValue}
                name="size"
                style={{ marginLeft: "45px" }}
              />
              <br />A size too small
            </div>
            <div>
              <input
                type="radio"
                value="½ a size too small"
                onChange={onChangeSizeValue}
                name="size"
                style={{ marginLeft: "50px" }}
              />{" "}
              <br />½ a size too small
            </div>

            <div>
              <input
                type="radio"
                value="Perfect"
                onChange={onChangeSizeValue}
                name="size"
                style={{ marginLeft: "5px" }}
              />
              <br />
              Perfect
            </div>
            <div>
              <input
                type="radio"
                value="½ a size too big"
                onChange={onChangeSizeValue}
                name="size"
                style={{ marginLeft: "45px" }}
              />
              <br />½ a size too big
            </div>
            <div>
              <input
                type="radio"
                value="A size too wide"
                onChange={onChangeSizeValue}
                name="size"
                style={{ marginLeft: "30px" }}
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
                onChange={onChangeWidthValue}
                name="width"
                style={{ marginLeft: "25px" }}
              />{" "}
              <br /> Too narrow
            </div>
            <div>
              <input
                type="radio"
                value="Slightly narrow"
                onChange={onChangeWidthValue}
                name="width"
                style={{ marginLeft: "40px" }}
              />{" "}
              <br /> Slightly narrow
            </div>
            <div>
              <input
                type="radio"
                value="Perfect"
                onChange={onChangeWidthValue}
                name="width"
                style={{ marginLeft: "15px" }}
              />{" "}
              <br />
              Perfect
            </div>

            <div>
              <input
                type="radio"
                value="Slightly wide"
                onChange={onChangeWidthValue}
                name="width"
                style={{ marginLeft: "35px" }}
              />{" "}
              <br />
              Slightly wide
            </div>

            <div>
              <input
                type="radio"
                value="Too wide"
                onChange={onChangeWidthValue}
                name="width"
                style={{ marginLeft: "20px" }}
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
                onChange={onChangeComfortValue}
                name="comfort"
                style={{ marginLeft: "35px" }}
              />{" "}
              <br />
              Uncomfortable
            </div>

            <div>
              <input
                type="radio"
                value="Slightly uncomfortable"
                onChange={onChangeComfortValue}
                name="comfort"
                style={{ marginLeft: "60px" }}
              />{" "}
              <br />
              Slightly uncomfortable
            </div>
            <div>
              <input
                type="radio"
                value="Ok"
                onChange={onChangeComfortValue}
                name="comfort"
                style={{ marginLeft: "00px" }}
              />{" "}
              <br />
              Ok
            </div>
            <div>
              <input
                type="radio"
                value="Comfortable"
                onChange={onChangeComfortValue}
                name="comfort"
                style={{ marginLeft: "30px" }}
              />{" "}
              <br />
              Comfortable
            </div>
            <div>
              <input
                type="radio"
                value="Perfect"
                onChange={onChangeComfortValue}
                name="comfort"
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
            Quality
          </div>
          <label className="quality-characteristics">
            <div>
              <input
                type="radio"
                value="Poor"
                onChange={onChangeQualityValue}
                name="quality"
                style={{ marginLeft: "5px" }}
              />{" "}
              <br />
              Poor
            </div>
            <div>
              <input
                type="radio"
                value="Below average"
                onChange={onChangeQualityValue}
                name="quality"
                style={{ marginLeft: "40px" }}
              />{" "}
              <br />
              Below average
            </div>
            <div>
              <input
                type="radio"
                value="What I expected"
                onChange={onChangeQualityValue}
                name="quality"
                style={{ marginLeft: "45px" }}
              />{" "}
              <br />
              What I expected
            </div>
            <div>
              <input
                type="radio"
                value="Pretty great"
                onChange={onChangeQualityValue}
                name="Pretty great"
                style={{ marginLeft: "30px" }}
              />{" "}
              <br />
              Comfortable
            </div>
            <div>
              <input
                type="radio"
                value="Perfect"
                onChange={onChangeQualityValue}
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
                onChange={onChangeLengthValue}
                name="length"
                style={{ marginLeft: "25px" }}
              />{" "}
              <br />
              Runs short
            </div>
            <div>
              <input
                type="radio"
                value="Runs slightly short"
                onChange={onChangeLengthValue}
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
                onChange={onChangeLengthValue}
                name="length"
                style={{ marginLeft: "15px" }}
              />{" "}
              <br />
              Perfect
            </div>
            <div>
              <input
                type="radio"
                value="Runs slightly long"
                onChange={onChangeLengthValue}
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
                onChange={onChangeLengthValue}
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
                onChange={onChangeFitValue}
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
                onChange={onChangeFitValue}
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
                onChange={onChangeFitValue}
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
                onChange={onChangeFitValue}
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
                onChange={onChangeFitValue}
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

export default Characteristics;
