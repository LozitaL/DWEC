/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package carritodecompra.entidades;

/**
 *
 * @author joseluiscasadovalero
 */
public class VGranel extends Producto implements ICalculoCoste{
    
    public static final double CANTIDAD_DESCUENTO_MAX = 10;
    public static final double CANTIDAD_DESCUENTO_MIN = 5;
    public static final double DESCUENTO_MAX = 0.9;
    public static final double DESCUENTO_MIN = 0.95;
    
    private double volumen;

    public VGranel() {
        super("", 0);
    }
    
    

    public VGranel(double volumen, String nombre, double precio) {
        super(nombre, precio);
        this.volumen = volumen;
    }
    
    /**
     * 
     * @param cantidad en kg
     * @return 
     */
    
    @Override
    public double getCoste(double cantidad) {
        double coste = cantidad * precio;
        
        // Aplicamos el descuento si procede
        if (cantidad >= CANTIDAD_DESCUENTO_MAX) {
            coste = coste * DESCUENTO_MAX;
        } else if (cantidad >= CANTIDAD_DESCUENTO_MIN) {
            coste = coste * DESCUENTO_MIN;
        }
        System.out.println("Coste de compra granel " + nombre + " -> "  + coste);
        return coste;
    }

    /**
     * @return the volumen
     */
    public double getVolumen() {
        return volumen;
    }

    /**
     * @param volumen the volumen to set
     */
    public void setVolumen(double volumen) {
        this.volumen = volumen;
    }

//    @Override
//    public double getCoste(double cantidad) {
//        return 0;
////        throw new UnsupportedOperationException("Not supported yet."); // Generated from nbfs://nbhost/SystemFileSystem/Templates/Classes/Code/GeneratedMethodBody
//    }
    
    
    
    
}
