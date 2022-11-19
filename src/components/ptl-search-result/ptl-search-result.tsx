import { Component, h, Listen, State } from '@stencil/core';
type product = {
  title: string,
  price: number,
  thumbnail: string,

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
  renderCards (items: product[]) {
    if (!items.length) {return}
    console.log('renderCards');
    
    return items.map( (item) => {
      return (
        <div class="p-4 w-96">
          <div class="bg-cover bg-center" style={{backgroundImage: `url(${item.thumbnail})`, paddingBottom: '100%'}}></div>
          <p class="text-center">{item.title}</p>
          <p class="text-center">Rp. {item.price}0.000</p>
        </div>
        )
      }
    )
  }

  componentDidLoad() {

    var link = document.createElement( "link" );
    link.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css";
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName( "head" )[0].appendChild( link );
  }
  
  render() {
    return (
      
      <div class="p-4 flex gap-4 flex-wrap justify-center">
        <i class="bi bi-list text-2xl"></i>
        { this.emptyState ? this.templateEmptyState() :this.renderCards(this.products) }
      </div>
    );
  }

}
