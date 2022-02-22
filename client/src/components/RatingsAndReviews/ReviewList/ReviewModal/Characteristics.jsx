import React from 'react';

class Characteristics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.onChangeSizeValue = this.onChangeSizeValue.bind(this);
    this.onChangeWidthValue = this.onChangeWidthValue.bind(this);
    this.onChangeComfortValue = this.onChangeComfortValue.bind(this);
    this.onChangeQualityValue = this.onChangeQualityValue.bind(this);
    this.onChangeLengthValue = this.onChangeLengthValue.bind(this);
    this.onChangeFitValue = this.onChangeFitValue.bind(this);

  }

  onChangeSizeValue() {
    let size = null;
    event.target.value === "A size too small" ? size = 1 : null;
    event.target.value === "½ a size too small" ? size = 2 : null;
    event.target.value === "Perfect" ? size = 3 : null;
    event.target.value === "½ a size too big" ? size = 4 : null;
    event.target.value === "A size too wide" ? size = 5 : null;
    this.props.onChangeSize(size)
  }


  onChangeWidthValue() {
    let width = null;
    event.target.value === "Too narrow" ? width = 1 : null;
    event.target.value === "Slightly narrow" ? width = 2 : null;
    event.target.value === "Perfect" ? width = 3 : null;
    event.target.value === "Slightly wide" ? width = 4 : null;
    event.target.value === "Too wide" ? width = 5 : null;
    this.props.onChangeWidth(width)
  }

  onChangeComfortValue() {
    let comfort = null;
    event.target.value === "Uncomfortable" ? comfort = 1 : null;
    event.target.value === "Slightly uncomfortable" ? comfort = 2 : null;
    event.target.value === "Ok" ? comfort = 3 : null;
    event.target.value === "Comfortable" ? comfort = 4 : null;
    event.target.value === "Perfect" ? comfort = 5 : null;
    this.props.onChangeComfort(comfort)
  }

  onChangeQualityValue() {
    let quality = null;
    event.target.value === "Poor" ? quality = 1 : null;
    event.target.value === "Below average" ? quality = 2 : null;
    event.target.value === "What I expected" ? quality = 3 : null;
    event.target.value === "Pretty great" ? quality = 4 : null;
    event.target.value === "Perfect" ? quality = 5 : null;
    this.props.onChangeQuality(quality);
  }

  onChangeLengthValue() {
    let length = null;
    event.target.value === "Runs short" ? length = 1 : null;
    event.target.value === "Runs slightly short" ? length = 2 : null;
    event.target.value === "Perfect" ? length = 3 : null;
    event.target.value === "Runs slightly long" ? length = 4 : null;
    event.target.value === "Runs long" ? length = 5 : null;
    this.props.onChangeLength(length);
  }

  onChangeFitValue() {
    let fit = null;
    event.target.value === "Runs tight" ? fit = 1 : null;
    event.target.value === "Runs slightly tight" ? fit = 2 : null;
    event.target.value === "Perfect" ? fit = 3 : null;
    event.target.value === "Runs slightly long" ? fit = 4 : null;
    event.target.value === "Runs long" ? fit = 5 : null;
    this.props.onChangeFit(fit);
  }

  render() {
    return (
      <div>
        <div className="size-characteristics">
          <label>
            <input type="radio" value="A size too small" onChange={this.onChangeSizeValue} name="size" /> A size too small
            <input type="radio" value="½ a size too small" onChange={this.onChangeSizeValue} name="size" /> ½ a size too small
            <input type="radio" value="Perfect" onChange={this.onChangeSizeValue} name="size" /> Perfect
            <input type="radio" value="½ a size too big" onChange={this.onChangeSizeValue} name="size" /> ½ a size too big
            <input type="radio" value="A size too wide" onChange={this.onChangeSizeValue} name="size" /> A size too wide
          </label>
        </div>

        <div className="width-characteristics">
          <label>
            <input type="radio" value="Too narrow" onChange={this.onChangeWidthValue} name="width" /> Too narrow
            <input type="radio" value="Slightly narrow" onChange={this.onChangeWidthValue} name="width" /> Slightly narrow
            <input type="radio" value="Perfect" onChange={this.onChangeWidthValue} name="width" /> Perfect
            <input type="radio" value="Slightly wide" onChange={this.onChangeWidthValue} name="width" /> Slightly wide
            <input type="radio" value="Too wide" onChange={this.onChangeWidthValue} name="width" /> Too wide
          </label>
        </div>

        <div className="comfort-characteristics">
          <label>
            <input type="radio" value="Uncomfortable" onChange={this.onChangeComfortValue} name="comfort" /> Uncomfortable
            <input type="radio" value="Slightly uncomfortable" onChange={this.onChangeComfortValue} name="comfort" /> Slightly uncomfortable
            <input type="radio" value="Ok" onChange={this.onChangeComfortValue} name="comfort" /> Ok
            <input type="radio" value="Comfortable" onChange={this.onChangeComfortValue} name="comfort" /> Comfortable
            <input type="radio" value="Perfect" onChange={this.onChangeComfortValue} name="comfort" /> Perfect
          </label>
        </div>

        <div className="quality-characteristics">
          <label>
            <input type="radio" value="Poor" onChange={this.onChangeQualityValue} name="quality" /> Poor
            <input type="radio" value="Below average" onChange={this.onChangeQualityValue} name="quality" /> Below average
            <input type="radio" value="What I expected" onChange={this.onChangeQualityValue} name="quality" /> What I expected
            <input type="radio" value="Pretty great" onChange={this.onChangeQualityValue} name="Pretty great" /> Comfortable
            <input type="radio" value="Perfect" onChange={this.onChangeQualityValue} name="quality" /> Perfect
          </label>
        </div>

        <div className="length-characteristics">
          <label>
            <input type="radio" value="Runs short" onChange={this.onChangeLengthValue} name="length" /> Runs short
            <input type="radio" value="Runs slightly short" onChange={this.onChangeLengthValue} name="length" /> Runs slightly short
            <input type="radio" value="Perfect" onChange={this.onChangeLengthValue} name="length" /> Perfect
            <input type="radio" value="Runs slightly long" onChange={this.onChangeLengthValue} name="length" /> Runs slightly long
            <input type="radio" value="Runs long" onChange={this.onChangeLengthValue} name="length" /> Runs long
          </label>
        </div>

        <div className="fit-characteristics">
          <label>
            <input type="radio" value="Runs tight" onChange={this.onChangeFitValue} name="fit" /> Runs tight
            <input type="radio" value="Runs slightly tight" onChange={this.onChangeFitValue} name="fit" /> Runs slightly tight
            <input type="radio" value="Perfect" onChange={this.onChangeFitValue} name="fit" /> Perfect
            <input type="radio" value="Runs slightly long" onChange={this.onChangeFitValue} name="fit" /> Runs slightly long
            <input type="radio" value="Runs long" onChange={this.onChangeFitValue} name="fit" /> Runs long
          </label>
        </div>
      </div>
    )
  }
}

export default Characteristics;

