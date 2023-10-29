/*
 * @fileoverview    {Zonas}
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
 * TODO: Definición de {@code Zonas}.
 *
 * @author Dyson Parra
 * @since 11
 */
@Entity
@Table(name = "\"Zonas\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class Zonas implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false, length = 20)
    private String strCodigoZona;
    @Column(length = 255)
    private String strDescripcionZona;
    private Boolean bitTransitoDirecto;
    private Boolean bitPicking;
    private Boolean bitUbicacion;
    private Boolean bitDespacho;
    private Boolean bitRecepcion;
    private Boolean bitActivo;
    @Column(length = 255)
    private String strUsuario;
    @Basic(optional = false)
    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;
    @JoinColumn(name = "intIdBodega", referencedColumnName = "intIdBodega")
    private Long intIdBodega;

}
