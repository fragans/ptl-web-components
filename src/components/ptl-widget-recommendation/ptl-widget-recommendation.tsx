import { Component, Host, State, Prop,  h } from '@stencil/core';
type product = {
  title: string,
  price: number,
  thumbnail: string
}
@Component({
  styleUrl: 'ptl-widget-recommendation.css',
  tag: 'ptl-widget-recommendation',
  shadow: true,
})
export class PtlWidgetRecommendation {
  @Prop() apiUrl="https://dummyjson.com/products?limit=5"
  @State() products: product[]= []
  @State() emptyState: boolean = false

  templateCards (items: product[]) {
    if (!items.length) {return} 
    return items.map( (item) => {
      return (
        <a href="#" class="card relative">
          <div class="bg-cover bg-center" style={{backgroundImage: `url(${item.thumbnail})`, paddingBottom: '145%'}}></div>
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
    if (!this.emptyState && this.products.length) { return }
    return (
      <div>
        <h2 class="underline capitalize font-bold text-xl text-primary">
          hasil pencarian
        </h2>
      </div>
    )
  }
  async componentWillLoad () {
    
    console.log(`fetching rekomendasi `);
    let response = await fetch(`${this.apiUrl}`);
    let json = await response.json();
    this.products = json.products
    console.log('done json:', this.products);
  }
  
  render() {

    return (
      <Host>
        <div>
          <h2 class="underline capitalize font-bold text-xl text-primary">
            produk rekomendasi
          </h2>
        </div>
        <div class="p-4 grid lg:grid-cols-5 auto-rows-auto grid-cols-2 gap-10">
          { this.templateCards(this.products) }
        </div>
      </Host>
    );
  }

}
