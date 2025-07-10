/*
 * @overview        {ComponentesViewModel}
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
 * TODO: Description of {@code ComponentesViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class ComponentesViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public intIdComponente: number;
    public strNumeroOrden: string;
    public strCodigoMaterial: string;
    public intIdUnidadMedida: number;
    public intIdAlmacen: number;
    public decCantidadBase: number;
    public decCantidadRequerida: number;
    public decCantidadAdicional: number;
    public decCantidadConsumida: number;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaEstimada: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaEfectiva: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaInicio: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaFinal: string;
    public intIdEstadoComponente: number;
    public strUsuario: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFecha: string;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): ComponentesViewModel {
        return new ComponentesViewModel();
    }

}
