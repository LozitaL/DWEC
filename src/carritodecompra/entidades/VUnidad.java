/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package carritodecompra.entidades;

/**
 *
 * @author joseluiscasadovalero
 */
public class VUnidad extends Producto implements ICalculoCoste{

    public static final double CANTIDAD_PARA_DESCUENTO = 4;
    public static final double FACTOR_DESCUENTO = 0.95;
    
    private double peso;
    private double volumen;

    public VUnidad() {
        super("", 0);
    }

    
    public VUnidad(double peso, double volumen, String nombre, double precio) {
        super(nombre, precio);
        this.peso = peso;
        this.volumen = volumen;
    }

    @Override
    public double getCoste(double cantidad) {
        double coste = cantidad * precio;
        
        // Aplicamos el descuento si procede
        if (cantidad >= CANTIDAD_PARA_DESCUENTO) {
            coste = coste * FACTOR_DESCUENTO;
        }
        
        System.out.println("Coste de compra unidad " + nombre + " -> "  + coste);
        
        return coste;
    }
    
    
    
    /**
     * @return the peso
     */
    public double getPeso() {
        return peso;
    }

    /**
     * @param peso the peso to set
     */
    public void setPeso(double peso) {
        this.peso = peso;
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
    
    
    
    
}
