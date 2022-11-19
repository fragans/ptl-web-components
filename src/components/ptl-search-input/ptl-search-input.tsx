import { Component,Event,EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptl-search-input',
  styleUrl: 'ptl-search-input.css',
  shadow: true,
})

export class PtlSearchInput {
  searchInput!: HTMLInputElement;

  @Prop() apiUrl="https://dummyjson.com/products/search?q="

  @Event({bubbles: true, composed: true}) fetchSearchApi: EventEmitter<JSON>;
  private async search(): Promise<void> {
    
    const keyword = this.searchInput.value
    console.log(`search: ${keyword} `);
    let response = await fetch(`${this.apiUrl}${keyword}`);
    let json = await response.json();
    console.log('done json');
    
    this.fetchSearchApi.emit(json);
  }

  private keypressHandler(e:KeyboardEvent): void {
    if (e.key === 'Enter'){
      this.search()
    }
  }

  render() {
    return (
      
        <input
          type="search"
          class="bg-accent-40 px-4 py-3 rounded-sm w-full"
          placeholder="search ..."
          ref={(el) => this.searchInput = el as HTMLInputElement}
          onKeyPress={(e) => {this.keypressHandler(e)}}
        /> 
      
    );
  }

}
