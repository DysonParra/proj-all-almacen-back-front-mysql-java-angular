/*
 * @fileoverview    {MaterialesViewModel}
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
 * TODO: Description of {@code MaterialesViewModel}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Injectable({
    providedIn: 'root'
})
export class MaterialesViewModel extends GenericViewModel<number> {

    @Id
    @NotNull
    public intIdMaterial: number;
    public strCodigoMaterial: string;
    public strReferencia: string;
    public bitGeneraRecibo: boolean;
    public bitVentaApartado: boolean;
    public bitPermiteDevolucion: boolean;
    public strSimbolo: string;
    public fltValorUnitario: number;
    public fltCosto: number;
    public bitConsumible: boolean;
    public bitProducible: boolean;
    public bitComprable: boolean;
    public bitVendible: boolean;
    public bitActivo: boolean;
    public strUsuario: string;
    @Temporal(TemporalType.TIMESTAMP)
    public dtFecha: string;
    public intIdTiposMateriales: number;

    /**
     * TODO: Description of method {@code newEntity}.
     *
     */
    public newEntity(): MaterialesViewModel {
        return new MaterialesViewModel();
    }

}
