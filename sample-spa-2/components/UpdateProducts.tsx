'use client';

//import { GamesContext } from '@/context/GamesContex';
import { ProductContext } from '@/context/ProductsContex';
import React, { useContext, useState } from 'react';
import { Stage } from '@/context/ProductsContex';

const UpdateProducts = ({ }) => {
    const {produtos, putProducts, refreshPage} = useContext(ProductContext)
    const [description, setDescription] = useState('');
    const [_id, setId] = useState();
    const [name, setName] = useState('');
    const [qtd, setQtd] = useState(0);
    const [category, setCategory] = useState(0);
    const [preco, setPreco] = useState(0);
    

    const AttGame = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        putProducts( _id, name, qtd, category, preco, description )
        refreshPage()
        };
    
        return (
            <div className="text-center mt-10">
                <h3 className="mb-4 text-xl font-light">Atualizar Jogo</h3>
                <form onSubmit={AttGame}>

                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-1">ID</label>
                        <input
                            type="text"
                            id="_id"
                            value={_id}
                            onChange={(e) => setId(Number(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Nome do Jogo"
                        />
                    </div>
    
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-1">Nome</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Nome do Jogo"
                        />
                    </div>
    
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="description" className="block text-gray-700 font-bold mb-1">description</label>
                        <input
                            type="number"
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Nota do Jogo"
                        />
                    </div>
    
                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="qtd" className="block text-gray-700 font-bold mb-1">qtd</label>
                        <input
                            type="text"
                            id="qtd"
                            value={qtd}
                            onChange={(e) => setQtd(parseInt(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Descrição do Jogo"
                        />
                    </div>

                    <div className="w-full md:w-1/2 px-2 mb-4">
                        <label htmlFor="preco" className="block text-gray-700 font-bold mb-1">preco</label>
                        <input
                            type="text"
                            id="preco"
                            value={preco}
                            onChange={(e) => setPreco(parseInt(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Descrição do Jogo"
                        />
                    </div>

                    <div className="w-full px-2 mb-4">
                        <label htmlFor="categoria" className="block text-gray-700 font-bold mb-1">Categoria</label>
                        <select
                            id="categoria"
                            value={preco}
                            onChange={(e) => setCategory(Number(e.target.value))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        >

                        <option value={Stage.Esportes}>Esportes</option>
                        <option value={Stage.Terror}>Terror</option>
                        <option value={Stage.Aventura}>Aventura</option>
                        <option value={Stage.MOBA}>Moba</option>
                        <option value={Stage.RPG}>RPG</option>
                        </select>
                    </div>
    
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                    >
                        Atualizar
                    </button>
                </form>
            </div>
        );
    };
    
    export default UpdateProducts;