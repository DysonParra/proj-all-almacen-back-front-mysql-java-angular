/*
 * @overview        {CotizacionViewModel}
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
import { Injectable } from "@angular/core";
import { GenericViewModel } from "@app/module/essential/model/generic.model";
import { Id } from "@app/module/essential/decorator/id.decorator";
import { NotNull } from "@app/module/essential/decorator/not-null.decorator";
import { Hidden } from "@app/module/essential/decorator/hidden.decorator";
import { Temporal } from "@app/module/essential/decorator/temporal.decorator";
import { TemporalType } from "@app/module/essential/model/temporal-type.model";

/**
 * TODO: Description of {@code CotizacionViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class CotizacionViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public intIdCotizacion: number;
    public intCabecera: number;
    public intIdPlanCompra: number;
    @NotNull
    public intIdProveedor: number;
    public strEstado: string;
    public intCodigoMaterial: number;
    public strDescripcionMaterial: string;
    public strNombreProveedor: string;
    public strBuzonProveedor: string;
    @NotNull
    public dblCantidadRequerida: number;
    @NotNull
    public dblCantidadCotizada: number;
    public dblValorCotizado: number;
    public dblDescuento: number;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaNecesaria: string;
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaEntrega: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaCreacion: string;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): CotizacionViewModel {
        return new CotizacionViewModel();
    }

}
