/*
 * @fileoverview    {Zonas} se encarga de realizar tareas específicas.
 *
 * @version         2.0
 *
 * @author          Dyson Arley Parra Tilano <dysontilano@gmail.com>
 *
 * @copyright       Dyson Parra
 * @see             github.com/DysonParra
 *
 * History
 * @version 1.0     Implementación realizada.
 * @version 2.0     Documentación agregada.
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
 * @since 1.8
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
