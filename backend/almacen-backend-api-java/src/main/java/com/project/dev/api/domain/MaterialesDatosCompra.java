/*
 * @fileoverview    {MaterialesDatosCompra}
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementation done.
 * @version 2.0     Documentation added.
 */
package com.project.dev.api.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Definición de {@code MaterialesDatosCompra}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"MaterialesDatosCompra\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class MaterialesDatosCompra implements Serializable {

    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdMaterialDatoCompra;
    @Column(length = 255)
    private String strCodigoMaterialCompra;
    private Boolean bitAutomaticPurchase;
    private Boolean bitGestionLotes;
    @Column(precision = 10, scale = 2)
    private BigDecimal decToleranciaEntregaInferior;
    @Column(precision = 10, scale = 2)
    private BigDecimal decToleranciaEntregaSuperior;
    private Integer intDiasEntrega;
    private Boolean bitRequiereInspeccion;
    @Column(length = 255)
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    private Long intIdMaterial;
    @JoinColumn(name = "intIdInterlocutor", referencedColumnName = "intIdInterlocutorComercial")
    private Long intIdInterlocutor;
    @JoinColumn(name = "strCodigoMaterial", referencedColumnName = "strCodigoMaterial")
    private String strCodigoMaterial;
    @JoinColumn(name = "intIdUnidadMedidaBase", referencedColumnName = "intIdUnidadMedida")
    private Long intIdUnidadMedidaBase;
    @JoinColumn(name = "intIdUnidadMedidaCompra", referencedColumnName = "intIdUnidadMedida")
    private Long intIdUnidadMedidaCompra;

}
