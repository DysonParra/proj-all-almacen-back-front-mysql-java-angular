/*
 * @overview        {ListaDeMateriales}
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
 * TODO: Description of {@code ListaDeMateriales}.
 *
 * @author Dyson Parra
 * @since Java 17 (LTS), Gradle 7.3
 */
@Entity
@Table(name = "\"lista_de_materiales\"")
@AllArgsConstructor
@Builder
@Data
@NoArgsConstructor
public class ListaDeMateriales implements Serializable {

    @Id
    @Basic(optional = false)
    @Column(nullable = false)
    private Long intIdListaMaterial;
    private Long intIdUnidadMedida;
    private Long intIdTipoListaMaterial;
    private Long intIdBodega;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaInicio;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFechaFin;
    private Integer intCantidad;
    private String strCodigoMaterial;
    private String strCodigoComponente;
    private Long intIdListaPrecio;
    private BigDecimal decPrecioUnitario;
    private String strUsuario;
    @Temporal(TemporalType.TIMESTAMP)
    private Date dtFecha;

}
