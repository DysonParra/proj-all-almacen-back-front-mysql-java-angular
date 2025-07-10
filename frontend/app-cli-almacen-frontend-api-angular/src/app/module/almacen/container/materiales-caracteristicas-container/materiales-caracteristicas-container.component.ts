/*
 * @overview        {MaterialesCaracteristicasContainerComponent}
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
import { MaterialesCaracteristicasViewModel } from '../../model/materiales-caracteristicas.model';
import { MaterialesCaracteristicasFacade } from '../../facade/materiales-caracteristicas.facade';

/**
 * TODO: Description of {@code MaterialesCaracteristicasContainerComponent}.
 *
 * @author Dyson Parra
 * @since Angular 19, Node JS 22
 */
@Component({
    selector: 'app-materiales-caracteristicas-container',
    templateUrl: './materiales-caracteristicas-container.component.html',
    standalone: false,
    styleUrls: ['./materiales-caracteristicas-container.component.css']
})
export class MaterialesCaracteristicasContainerComponent extends GenericContainerComponent<MaterialesCaracteristicasViewModel> {

    /**
     * TODO: Description of method {@code constructor}.
     *
     */
    public constructor(
        entityInstance: MaterialesCaracteristicasViewModel,
        entityFacade: MaterialesCaracteristicasFacade) {
        super(entityInstance, entityFacade);
    }

}
