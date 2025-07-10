/*
 * @overview        {RemisionesVentaViewModel}
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
 * TODO: Description of {@code RemisionesVentaViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class RemisionesVentaViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public strNumeroDocumento: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaContabilizacion: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaValidez: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaDocumento: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaNecesaria: string;
    public strNumeroReferencia: string;
    public decTotalBruto: number;
    public dblPorcentajeDescuento: number;
    public dblPorcentajeImpuesto: number;
    public decValorTotal: number;
    public strComentarios: string;
    public strUsuario: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFecha: string;
    public intIdTipoDocumento: number;
    public intIdRemision: number;
    public intIdInterlocutor: number;
    public intListaPrecio: number;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): RemisionesVentaViewModel {
        return new RemisionesVentaViewModel();
    }

}
