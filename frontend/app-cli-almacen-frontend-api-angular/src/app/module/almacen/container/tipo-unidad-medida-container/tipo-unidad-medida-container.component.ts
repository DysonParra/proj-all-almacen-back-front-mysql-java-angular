/*
 * @fileoverview    {TipoUnidadMedidaContainerComponent}
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
import { Component } from '@angular/core';
import { GenericContainerComponent } from '@app/module/essential/container/generic-container.component';
import { TipoUnidadMedidaViewModel } from '../../model/tipo-unidad-medida.model';
import { TipoUnidadMedidaFacade } from '../../facade/tipo-unidad-medida.facade';

/**
 * TODO: Description of {@code TipoUnidadMedidaContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipo-unidad-medida-container',
    templateUrl: './tipo-unidad-medida-container.component.html',
    standalone: false,
    styleUrls: ['./tipo-unidad-medida-container.component.css']
})
export class TipoUnidadMedidaContainerComponent extends GenericContainerComponent<TipoUnidadMedidaViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TipoUnidadMedidaViewModel,
        entityFacade: TipoUnidadMedidaFacade) {
        super(entityInstance, entityFacade);
    }

}
