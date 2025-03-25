/*
 * @fileoverview    {RemisionesVentaMateriales}
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
import java.math.BigInteger;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * TODO: Description of {@code RemisionesVentaMateriales}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"remisiones_venta_materiales\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class RemisionesVentaMateriales implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdRemisionVentaMaterial;
    private String strNumeroDocumento;
    private String strCodigoMaterial;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaNecesaria;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaSolicitud;
    private Double dblCantidad;
    private BigDecimal decValorUnitario;
    private Float fltPorcentajeDescuento;
    private BigDecimal decCostoPromedio;
    private Long intIdRemisionCompra;
    private Long intIdMaterial;
    private Long intIdUnidadMedida;
    private BigDecimal decCantidadUnidadMedida;
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;

}
