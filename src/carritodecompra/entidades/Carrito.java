/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package carritodecompra.entidades;

import java.util.ArrayList;

/**
 *
 * @author joseluiscasadovalero
 */
public class Carrito {

    private ArrayList<Compra> productos;
    
    /**
     * @return the productos
     */
    public ArrayList<Compra> getProductos() {
        return productos;
    }

    /**
     * @param productos the productos to set
     */
    public void setProductos(ArrayList<Compra> productos) {
        this.productos = productos;
    }
    
    public void addProducto(Compra compra) {
        if (productos == null) {
            productos = new ArrayList<>();
        }
        
        productos.add(compra);
    }
    
    public double calculaTotal() {
        double total = 0;   
        if (productos != null) {
            for (Compra comp: productos) {
                total += comp.getCoste();
            }
        } 
        
        System.out.println("Coste de  total carrito  -> "  + total);
        
        return total;
        
    }
    
    
    
    
}
