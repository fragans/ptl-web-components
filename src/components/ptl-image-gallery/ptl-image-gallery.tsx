import { Component, Host, h, Prop, State } from '@stencil/core';
import defaultImages from '../ptl-image-gallery/images.json'
// type image = {
//   url: string
// }
@Component({
  tag: 'ptl-image-gallery',
  styleUrl: 'ptl-image-gallery.css',
  shadow: true,
})

export class PtlImageGallery {
  @Prop() activeImageRatio = 145;
  @Prop() images:string[]= defaultImages;
  @State() activeIndex = 0;
  templateImageActive () {
    const activeImage = this.images[this.activeIndex]
    return (
      
      <div class="bg-cover bg-center bg-gray-200" style={{ backgroundImage: `url(${activeImage})`, paddingBottom: `${this.activeImageRatio}%` }}></div>
    )
  }
  templateGalleryThumbnail () {
    if (!this.images){ return }
    // const width = `grid-cols-${this.images.length}`
    
    return this.images.map( (img,key) => {
      const activeBorder = key === this.activeIndex ? `border-4 border-primary` : `border-white border-4`
      return (
        <div class={ `${activeBorder} w-20` } onClick={ ()=> { this.setActiveImage(key) }} >
          <div class="bg-cover bg-center bg-gray-200 w-full border-4 border-white" style={{ backgroundImage: `url(${img})`, paddingBottom: `100%` }}></div>
        </div>
        )
      }
    )
  }
  setActiveImage (index: number) {
    this.activeIndex = index
  }
  componentWillLoad () {
  }
  render() {
    return (
      <Host>
        <div class="w-full">
            <div class="active-image-product w-full">
              { this.templateImageActive() }
            </div>
            <div class={ `flex flex-row w-full flex-wrap lg:flex-nowrap p-2 justify-center` }>
              { this.templateGalleryThumbnail() }
            </div>
          </div>
      </Host>
    );
  }

}
