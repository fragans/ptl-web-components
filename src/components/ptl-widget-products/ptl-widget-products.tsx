import { Component, Host, State, Prop,  h } from '@stencil/core';
type product = {
  id: number,
  title: string,
  price: number,
  thumbnail: string
}
@Component({
  styleUrl: 'ptl-widget-products.css',
  tag: 'ptl-widget-products',
  shadow: true,
})
export class PtlWidgetProducts {
  @Prop() apiHost="https://dummyjson.com/products"
  @Prop() limitProducts="5"
  @Prop() widgetTitle="Produk Kami"
  @State() products: product[]= []
  @State() emptyState: boolean = false

  templateCards (items: product[]) {
    if (!items.length) {return} 
    return items.map( (item) => {
      return (
        <a href={`/product/${item.id}`} class="card relative">
          <div class="bg-cover bg-center bg-gray-200" style={{backgroundImage: `url(${item.thumbnail})`, paddingBottom: '145%'}}></div>
          <div class="absolute bottom-0 w-full py-3 flex flex-col justify-center text-center text-primary bg-secondary">
            <p class="font-bold">{item.title}</p>
            <p>Rp. {item.price}</p>
          </div>
        </a>
        )
      }
    )
  }
  templateTitle () {
    if (this.emptyState) { 
      this.widgetTitle = 'tidak ada produk'
    }
    return (
      <div class="pt-5">
        <h2 class="underline capitalize font-bold text-xl text-primary">
          { this.widgetTitle }
        </h2>
      </div>
    )
  }
  async componentWillLoad () {
    
    console.log(`fetching ${this.widgetTitle} `);
    let url =`${this.apiHost}`
    if (this.limitProducts) {
      url += `?limit=${this.limitProducts}` 
    }
    let response = await fetch(url);
    let json = await response.json();
    this.products = json.products
    console.log('done json:', this.products);
  }
  
  render() {

    return (
      <Host>
        <div class="bg-inherit">
          { this.templateTitle() }
          <div class="p-4 grid lg:grid-cols-5 auto-rows-auto grid-cols-2 gap-10">
            { this.templateCards(this.products) }
          </div>
        </div>
      </Host>
    );
  }

}
