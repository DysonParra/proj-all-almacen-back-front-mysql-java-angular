/*
 * @fileoverview    {OrdenDeTrabajo}
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
 * TODO: Description of {@code OrdenDeTrabajo}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"orden_de_trabajo\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class OrdenDeTrabajo implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdOrdenTrabajo;
    private Long intIdOperacion;
    private Long intIdCentroTrabajo;
    private Long intIdEstadoOT;
    private String strNumeroOrden;

}
