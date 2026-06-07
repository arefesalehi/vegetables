import AdminPanelLayout from '@/components/layouts/AdminPanelLayout'
import ProductTable from '@/components/templates/p-admin/ProductTable'
import React from 'react'
import productModel from '@/models/product'
import AddProduct from '@/components/templates/p-admin/AddProduct'
const page = async () => {
  const products = await productModel.find({})
  console.log('products===>', products)

  return (
    <AdminPanelLayout>
      <div className="mycontainer">
        <AddProduct />
        <ProductTable products={JSON.parse(JSON.stringify(products))} />
      </div>
    </AdminPanelLayout>
  )
}

export default page
