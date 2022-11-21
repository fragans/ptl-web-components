import { Component, h, Listen, State } from '@stencil/core';
type product = {
  title: string,
  price: number,
  thumbnail: string
}

@Component({
  tag: 'ptl-search-result',
  styleUrl: 'ptl-search-result.css',
  shadow: true,
})
export class PtlSearchResult {
  @State() products: product[]= []
  @State() emptyState: boolean = false

  @Listen('fetchSearchApi',{target: 'document'})
    getChangedValue(event: CustomEvent) {
      const result = event.detail
      console.log('total',result.total);
      
      if (result.total === 0) {
        this.emptyState = true
      } else {
        this.products = result.products
      }
    }
  templateEmptyState () {
    return (
      <div>
        <h1 class="text-2xl text-center">
          Search Not Found
        </h1>
        <p>try another keyword maybe :)</p>
      </div>
    )
  }
  templateCards (items: product[]) {
    if (!items.length) {return} 
    return items.map( (item) => {
      return (
        <a href="#" class="card relative">
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
    return (
      <div>
        <h2 class="underline capitalize font-bold text-xl text-primary">
          { this.emptyState || !this.products.length ? '':  'produk kami'}
        </h2>
      </div>
    )
  }
  
  render() {
    return (
      <div>
        <div>
          { this.templateTitle() }
        </div>
        <div class="p-4 grid lg:grid-cols-5 auto-rows-auto grid-cols-2 gap-10">
          
          { this.emptyState ? this.templateEmptyState() :this.templateCards(this.products) }
        </div>
      </div>
    );
  }

}
