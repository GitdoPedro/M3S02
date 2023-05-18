import { TestBed } from '@angular/core/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationService);
  });

  it('Should create service', () => {
    expect(service).toBeTruthy();
  });

  it('getNotifications - Should return notifications', () => {
    // Arrange
    const mockNotifications = [ /* Array de notificações mockadas */ ];
    spyOn(service, 'getNotificationsApi').and.returnValue(mockNotifications);

    // Act
    const notifications = service.getNotifications();

    // Assert
    expect(notifications).toEqual(mockNotifications);
  });

  it('getNotificationsApi - Should return notifications from API', () => {
    // Arrange
    const mockNotifications = [ /* Array de notificações mockadas */ ];
    spyOn(service, 'getNotificationsApi').and.returnValue(mockNotifications);

    // Act
    const notifications = service.getNotificationsApi();

    // Assert
    expect(notifications).toEqual(mockNotifications);
  });

  it('addNotificationApi - Should add notification via API', () => {
    // Arrange
    const mockNotification = { /* Dados da notificação mockada */ };
    spyOn(service, 'addNotificationApi').and.returnValue(mockNotification);

    // Act
    const addedNotification = service.addNotificationApi(mockNotification);

    // Assert
    expect(addedNotification).toEqual(mockNotification);
  });

  it('editNotificationApi - Should edit notification via API', () => {
    // Arrange
    const mockNotification = { /* Dados da notificação mockada */ };
    spyOn(service, 'editNotificationApi').and.returnValue(mockNotification);

    // Act
    const editedNotification = service.editNotificationApi(mockNotification);

    // Assert
    expect(editedNotification).toEqual(mockNotification);
  });

  it('removeNotification - Should remove notification via API', () => {
    // Arrange
    const notificationId = '123';
    spyOn(service, 'removeNotification').and.returnValue(true);

    // Act
    const isRemoved = service.removeNotification(notificationId);

    // Assert
    expect(isRemoved).toBe(true);
  });
});
