import React from 'react';
import { ProductContextProvider } from "@/context/ProductsContex";
import ListProduct from '@/components/Products';
import AddProducts from '@/components/AddProducts';
import UpdateProducts from '@/components/UpdateProducts';

const Tasks = () => {
  return (
    <main className="h-screen">
      <h1 className="text-2xl sm:text-4xl font-black tracking-wide text-center pt-6 pb-10 sm:pb-24">
            Gerenciamento de Jogos
      </h1>

      <div className="grid place-items-center">
        <ProductContextProvider>
          
        <AddProducts/>

        <ListProduct/>

        <UpdateProducts/>

        </ProductContextProvider>
      </div>
    </main>
  );
};

export default Tasks;
