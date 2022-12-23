import { Component, Prop,Fragment, h } from '@stencil/core';

@Component({
  tag: 'ptl-image-slider',
  styleUrl: 'ptl-image-slider.css',
  shadow: true,
})
export class PtlImageSlider {
  @Prop() images = ['https://source.unsplash.com/t7YycgAoVSw/1600x900','https://source.unsplash.com/11H1SSVcIxc/1600x900','https://source.unsplash.com/OlZ1nWLEEgM/1600x900']
  @Prop() captions = ['product 1', 'product 2', 'product 3']
  @Prop() minHeight = '75vh'

  templateSlider () {
    if (!this.images.length) { return }
    return this.images.map( (image, key ) => {
        return (
          <Fragment>
            <input id={`slide-dot-${key}`} type="radio" name="slides" checked={ key === 0 ? true : false} />
            <div class="slide flex items-center justify-center" style={{ backgroundImage: `url(${image})` }}>
              <h1 class="text-4xl text-white">{ this.captions[key] }</h1>
            </div>
          </Fragment>
        )
      }
    )
  }
  templateDots () {
    if (!this.captions.length) { return } 
    return this.images.map( (_image, index)=> {
      return (
        <label htmlFor={ `slide-dot-${index}` } />
      )
    })
  }

  render() {
    return (
      <div class="slider-container" style={{ minHeight: this.minHeight }} >
        <div class="menu">
          { this.templateDots() }
        </div>
        { this.templateSlider() }
      </div>
    );
  }

}
