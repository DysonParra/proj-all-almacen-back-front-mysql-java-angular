/*
 * @fileoverview    {TiposMaterialesContainerComponent}
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
import { TiposMaterialesViewModel } from '../../model/tipos-materiales.model';
import { TiposMaterialesFacade } from '../../facade/tipos-materiales.facade';

/**
 * TODO: Description of {@code TiposMaterialesContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-tipos-materiales-container',
    templateUrl: './tipos-materiales-container.component.html',
    standalone: false,
    styleUrls: ['./tipos-materiales-container.component.css']
})
export class TiposMaterialesContainerComponent extends GenericContainerComponent<TiposMaterialesViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: TiposMaterialesViewModel,
        entityFacade: TiposMaterialesFacade) {
        super(entityInstance, entityFacade);
    }

}
