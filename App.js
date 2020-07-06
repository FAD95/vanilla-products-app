import './animations.css'
import './bootstrap.min.css'
class Product {
  constructor(name, price, year) {
    this.name = name
    this.price = price
    this.year = year
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById('product-list')
    const element = document.createElement('div')
    element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body p-0">
                <div class="d-flex justify-content-around">
                    <section class="mt-3">
                        <strong>Product Name: </strong><p>${product.name}</p>
                    </section>
                    <section class="mt-3">
                        <strong>Product Price: </strong><p>${product.price}</p>                                
                    </section>
                    <section class="mt-3">                    
                        <strong>Product Year: </strong><p>${product.year}</p>          
                    </section>
                </div>
                <a href="#" class="btn btn-danger d-block" name="delete">Delete</a>            
            </div>            
        </div>
      `
    productList.appendChild(element)
    this.resetForm()
    this.showMessage('Product Added Successfully', 'success')
  }
  resetForm() {
    document.getElementById('product-form').reset()
  }
  deleteProduct(target) {
    if (target.name === 'delete') {
      target.parentElement.parentElement.parentElement.remove()
      this.showMessage('Product Deleted Successfully', 'info')
    }
  }
  showMessage(message, cssClass) {
    const div = document.createElement('div')
    div.id = 'AlertMessage'
    div.className = `alert alert-${cssClass} mt-3`
    div.appendChild(document.createTextNode(message))
    // Showing in DOM
    const container = document.querySelector('.container')
    const app = document.querySelector('#App')
    container.insertBefore(div, app)
    setTimeout(() => {
      document.querySelector('.alert').remove()
    }, 3000)
  }
}

// DOM events
document.getElementById('product-form').addEventListener('submit', (e) => {
  const name = document.getElementById('name').value
  const price = document.getElementById('price').value
  const year = document.getElementById('year').value
  const product = new Product(name, price, year)
  const ui = new UI()

  ui.addProduct(product)

  e.preventDefault()
})

document.getElementById('product-list').addEventListener('click', (e) => {
  const ui = new UI()
  ui.deleteProduct(e.target)
  //   ui.deleteProduct(product)
})
