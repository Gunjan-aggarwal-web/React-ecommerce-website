import { useFilter } from '../context/FilterContext'
import GridView from './GridView'
import ListView from './ListView'

function ProductList() {
  const { filteredItems, gridView } = useFilter()

  return gridView === true ? (
    <GridView items={filteredItems} />
  ) : (
    <ListView items={filteredItems} />
  )
}

export default ProductList