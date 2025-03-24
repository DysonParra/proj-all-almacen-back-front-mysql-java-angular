/*
 * @fileoverview    {Componentes}
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
 * TODO: Description of {@code Componentes}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"componentes\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Componentes implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdComponente;
    private Long intIdAlmacen;
    private BigDecimal decCantidadBase;
    private BigDecimal decCantidadRequerida;
    private BigDecimal decCantidadAdicional;
    private BigDecimal decCantidadConsumida;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaEstimada;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaEfectiva;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaInicio;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaFinal;
    private Long intIdEstadoComponente;
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    private String strCodigoMaterial;
    private String strNumeroOrden;
    private Long intIdUnidadMedida;

}
