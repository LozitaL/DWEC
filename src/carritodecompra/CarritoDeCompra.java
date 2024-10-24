/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package carritodecompra;

import carritodecompra.entidades.Carrito;
import carritodecompra.entidades.Compra;
import carritodecompra.entidades.VGranel;
import carritodecompra.entidades.VUnidad;

/**
 *
 * @author joseluiscasadovalero
 */
public class CarritoDeCompra {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        
        VUnidad unidad1 = new VUnidad(1.2, 100, "Telefono a", 89);
        VGranel granel1 = new VGranel(60, "Peras", 1.4);
        
        Compra compra1 = new Compra(unidad1, 1);
        Compra compra2 = new Compra(granel1, 3.4);
        
        Carrito miCarrito = new Carrito();
        
        
        miCarrito.addProducto(compra1);
        miCarrito.addProducto(compra2);
        
        miCarrito.calculaTotal();
                
        
        
        
    }
    
}
