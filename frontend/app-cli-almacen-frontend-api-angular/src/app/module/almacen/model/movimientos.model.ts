/*
 * @fileoverview    {MovimientosViewModel}
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
 * TODO: Description of {@code MovimientosViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MovimientosViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public intIdMovimiento: number;
    public intIdRemision: number;
    public strNumeroDocumento: string;
    public intIdTipoDocumento: number;
    public intIdTipoMovimiento: number;
    public intIdEstadoMovimiento: number;
    public intIdConcepto: number;
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaCreacion: string;
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    public dtFechaAnulacion: string;
    public intIdBodega: number;
    public decSobreCosto: number;
    public decSobreCostoAplicadoProducto: number;
    public strObservaciones: string;
    public strUsuario: string;
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    public dtFecha: string;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): MovimientosViewModel {
        return new MovimientosViewModel();
    }

}
