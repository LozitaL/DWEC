/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package carritodecompra.entidades;

/**
 *
 * @author joseluiscasadovalero
 */
public class VSuscripcion extends Producto implements ICalculoCoste{

    public VSuscripcion() {
        super("", 0);
    }
    
    @Override
    public double getCoste(double cantidad) {
        double coste = cantidad * precio;
        
        // Aplicamos el descuento si procede
        if (cantidad >= 12) {
            coste = coste * 0.9;
        }
        
        System.out.println("Coste de compra suscripcion " + nombre + " -> "  + coste);
        
        return coste;
    }
    
    
}
